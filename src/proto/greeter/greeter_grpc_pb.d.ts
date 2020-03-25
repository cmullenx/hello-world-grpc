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

interface IGreeterService_ISayHello extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, greeter_pb.HelloResponse> {
    path: string; // "/greeter.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<greeter_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, greeter_pb.HelloResponse>;
}

export interface IGreeterClient {
    sayHello(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
