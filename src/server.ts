import moduleAlias from 'module-alias'
moduleAlias.addAliases({
    '@utils': `${__dirname}/utils`,
    '@controllers': `${__dirname}/controllers`,
    '@routes': `${__dirname}/routes`,
    '@middlewares': `${__dirname}/middlewares`,
    '@configs': `${__dirname}/configs`,
    '@tstypes': `${__dirname}/tstypes`,
    '@models': `${__dirname}/models`,
    '@interfaces': `${__dirname}/interfaces`,
    '@components': `${__dirname}/components`,
    '@providers': `${__dirname}/providers`,
});

import Config from "./configs/config";
import App from './app';

const PORT = Config.SERVER.PORT || 3500;
const appInstance = App.getInstance().getApp();

appInstance.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
});
