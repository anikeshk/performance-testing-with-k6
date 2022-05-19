import http from "k6/http";
import { sleep } from "k6";

const ENDPOINT = "https://test.k6.io";

export default function () {
  http.get(ENDPOINT);
  sleep(1);
}
