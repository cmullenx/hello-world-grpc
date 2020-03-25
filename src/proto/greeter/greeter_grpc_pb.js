// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_pb = require('./greeter_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloResponse(arg) {
  if (!(arg instanceof greeter_pb.HelloResponse)) {
    throw new Error('Expected argument of type greeter.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloResponse(buffer_arg) {
  return greeter_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/greeter.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: greeter_pb.HelloResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_greeter_HelloResponse,
    responseDeserialize: deserialize_greeter_HelloResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
