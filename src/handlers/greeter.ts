import * as grpc from "grpc";

import { HelloResponse } from "../proto/greeter/greeter_pb";
import {
  GreeterService,
  IGreeterServer
} from "../proto/greeter/greeter_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

class GreeterHandler implements IGreeterServer {
  /**
   * Greet the user nicely
   * @param call
   * @param callback
   */
  sayHello = (
    call: grpc.ServerUnaryCall<Empty>,
    callback: grpc.sendUnaryData<HelloResponse>
  ): void => {
    const reply: HelloResponse = new HelloResponse();

    reply.setMessage(`Hello World. This is a gRPC Service`);

    callback(null, reply);
  };
}

export default {
  service: GreeterService, // Service interface
  handler: new GreeterHandler() // Service interface definitions
};
