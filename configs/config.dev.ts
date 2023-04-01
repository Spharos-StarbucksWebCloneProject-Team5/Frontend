import getConfigs from "./config.common";

// backend 서버 URL
const baseUrl = "http://3.36.128.190:8080";

//const baseUrl = "http://localhost:8080";
//const baseUrl = "http://43.200.180.136:8080";
//const baseUrl = "http://10.10.10.76:8081";


const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
