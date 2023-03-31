import getConfigs from "./config.common";

// backend 서버 URL
const baseUrl = "http://3.36.128.190/:8081";

const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
