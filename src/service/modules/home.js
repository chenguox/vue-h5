import gxRequest from "../request";

export function getHomeData() {
  return gxRequest.get({
    url: "/home/XXX",
  });
}
