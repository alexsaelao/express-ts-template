// import axios from "axios";
// import { Request } from "express";
// import UAParser from 'ua-parser-js';
// import platform from 'platform';
// import DeviceDetector from "device-detector-js";
// import BotDetector from "device-detector-js/dist/parsers/bot";
// import moment from "moment";
// import Config from "@configs/config";

export default class Util {

    public static getIpInfo = async (ip: string): Promise<void> => {
        try {
            // const response = await axios.get(`https://ipinfo.io/${ip}/json`);
            // return response.data;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static getClientInfo = async (req: Request): Promise<void> => {
        try {

            // const clientIp: string = req.ip!;
            // const userAgent: string = req.get('User-Agent') || '';
            // // const ipInfo_io = await this.getIpInfo(clientIp);
            // const data = platform.parse(userAgent);

            // const deviceDetector = new DeviceDetector();
            // const device = deviceDetector.parse(userAgent);

            // const botDetector = new BotDetector();
            // const bot = botDetector.parse(userAgent);

            // const ua_parser = new UAParser(userAgent);
            // const ua_parser_data = {
            //     browser: ua_parser.getBrowser(),
            //     device: ua_parser.getDevice(),
            //     os: ua_parser.getOS(),
            //     ua: ua_parser.getResult(),
            //     cpu: ua_parser.getCPU(),
            //     engine: ua_parser.getEngine(),
            // };


            // const info: any = {
            //     clientIp: clientIp,
            //     userAgent: userAgent,
            //     // ipInfo_io: ipInfo_io,
            //     platform: data,
            //     device: device,
            //     bot: bot,
            //     ua_parser: ua_parser_data,
            // };
            // return info;

        } catch (error: any) {
            throw new Error(error);
        }
    }
}