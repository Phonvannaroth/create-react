import stores from "../redux/store";
import app from "./setup.store";

function APP() {
  return app(stores);
}
export default APP;
