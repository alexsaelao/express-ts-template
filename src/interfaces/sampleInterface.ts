import Config from "@configs/config";
import ApiError from "@middlewares/apiError";
import InterfaceMiddleware from "@middlewares/interfaceMiddleware";

export default class SampleInterface extends InterfaceMiddleware {
    public static fetchAllSample = async (limit?: any, page?: any) => {
        try {
            const query = `
            SELECT 
            *
            FROM sample_table s
            WHERE s.deleted_at IS NULL
            ORDER BY s.created_at DESC
            LIMIT ${limit} 
            OFFSET ${(page - 1) * limit}
            `;
            const customers = await this.select(query);
            return customers;
        } catch (error) {
            throw error
        }
    }
    public static fetchSampleById = async (id?: any) => {
        try {
            const query = `
            SELECT
            *
            FROM sample_table s
            WHERE s.id = '${id}'
            AND s.deleted_at IS NULL LIMIT 1
            `;
            const customers = await this.select(query);
            if (customers.length !== 0) return customers;
            throw new ApiError.NotFoundError(Config.sample.notFound);
            
        } catch (error: any) {
            throw error;
        }
    }
}