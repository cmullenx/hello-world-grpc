// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeter_pb from "./greeter_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloResponse> {
    path: string; // "/greeter.Greeter/SayHello"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleBidiStreamingCall<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
}

export interface IGreeterClient {
    sayHello(): grpc.ClientDuplexStream<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
    sayHello(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
    sayHello(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
    public sayHello(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
}
