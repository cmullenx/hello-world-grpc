import { HelloResponse } from "../proto/greeter/greeter_pb";
import { GreeterService } from "../proto/greeter/greeter_grpc_pb";

class GreeterHandler {
  /**
   * Greet the user nicely
   * @param call
   */
  sayHello = (call: any): void => {
    const reply: HelloResponse = new HelloResponse();

    reply.setMessage(`Hello world returned from gRPC bidirectional service`);

    call.write(reply);
  };
}

export default {
  service: GreeterService, // Service interface
  handler: new GreeterHandler() // Service interface definitions
};
