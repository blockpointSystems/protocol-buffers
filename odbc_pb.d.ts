import * as jspb from 'google-protobuf'



export class DummyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DummyRequest): DummyRequest.AsObject;
  static serializeBinaryToWriter(message: DummyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyRequest;
  static deserializeBinaryFromReader(message: DummyRequest, reader: jspb.BinaryReader): DummyRequest;
}

export namespace DummyRequest {
  export type AsObject = {
  }
}

export class InitializationRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): InitializationRequest;

  getPassword(): string;
  setPassword(value: string): InitializationRequest;

  getDbName(): string;
  setDbName(value: string): InitializationRequest;

  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): InitializationRequest;
  hasAuth(): boolean;
  clearAuth(): InitializationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitializationRequest): InitializationRequest.AsObject;
  static serializeBinaryToWriter(message: InitializationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializationRequest;
  static deserializeBinaryFromReader(message: InitializationRequest, reader: jspb.BinaryReader): InitializationRequest;
}

export namespace InitializationRequest {
  export type AsObject = {
    username: string,
    password: string,
    dbName: string,
    auth?: authPacket.AsObject,
  }
}

export class authPacket extends jspb.Message {
  getLoginId(): number;
  setLoginId(value: number): authPacket;

  getUUID(): Uint8Array | string;
  getUUID_asU8(): Uint8Array;
  getUUID_asB64(): string;
  setUUID(value: Uint8Array | string): authPacket;

  getJWT(): string;
  setJWT(value: string): authPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): authPacket.AsObject;
  static toObject(includeInstance: boolean, msg: authPacket): authPacket.AsObject;
  static serializeBinaryToWriter(message: authPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): authPacket;
  static deserializeBinaryFromReader(message: authPacket, reader: jspb.BinaryReader): authPacket;
}

export namespace authPacket {
  export type AsObject = {
    loginId: number,
    uUID: Uint8Array | string,
    jWT: string,
  }
}

export class duration extends jspb.Message {
  getExecutionNanoSeconds(): number;
  setExecutionNanoSeconds(value: number): duration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): duration.AsObject;
  static toObject(includeInstance: boolean, msg: duration): duration.AsObject;
  static serializeBinaryToWriter(message: duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): duration;
  static deserializeBinaryFromReader(message: duration, reader: jspb.BinaryReader): duration;
}

export namespace duration {
  export type AsObject = {
    executionNanoSeconds: number,
  }
}

export class XactRequest extends jspb.Message {
  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): XactRequest;
  hasAuth(): boolean;
  clearAuth(): XactRequest;

  getIsolationLevel(): number;
  setIsolationLevel(value: number): XactRequest;

  getReadOnly(): boolean;
  setReadOnly(value: boolean): XactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: XactRequest): XactRequest.AsObject;
  static serializeBinaryToWriter(message: XactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XactRequest;
  static deserializeBinaryFromReader(message: XactRequest, reader: jspb.BinaryReader): XactRequest;
}

export namespace XactRequest {
  export type AsObject = {
    auth?: authPacket.AsObject,
    isolationLevel: number,
    readOnly: boolean,
  }
}

export class XactResponse extends jspb.Message {
  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): XactResponse;
  hasAuth(): boolean;
  clearAuth(): XactResponse;

  getXactId(): number;
  setXactId(value: number): XactResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XactResponse.AsObject;
  static toObject(includeInstance: boolean, msg: XactResponse): XactResponse.AsObject;
  static serializeBinaryToWriter(message: XactResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XactResponse;
  static deserializeBinaryFromReader(message: XactResponse, reader: jspb.BinaryReader): XactResponse;
}

export namespace XactResponse {
  export type AsObject = {
    auth?: authPacket.AsObject,
    xactId: number,
  }
}

export class ExecRequest extends jspb.Message {
  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): ExecRequest;
  hasAuth(): boolean;
  clearAuth(): ExecRequest;

  getStatement(): string;
  setStatement(value: string): ExecRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecRequest): ExecRequest.AsObject;
  static serializeBinaryToWriter(message: ExecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecRequest;
  static deserializeBinaryFromReader(message: ExecRequest, reader: jspb.BinaryReader): ExecRequest;
}

export namespace ExecRequest {
  export type AsObject = {
    auth?: authPacket.AsObject,
    statement: string,
  }
}

export class ExecResponse extends jspb.Message {
  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): ExecResponse;
  hasAuth(): boolean;
  clearAuth(): ExecResponse;

  getResponse(): string;
  setResponse(value: string): ExecResponse;

  getInsertId(): number;
  setInsertId(value: number): ExecResponse;

  getAffectedRows(): number;
  setAffectedRows(value: number): ExecResponse;

  getDuration(): duration | undefined;
  setDuration(value?: duration): ExecResponse;
  hasDuration(): boolean;
  clearDuration(): ExecResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecResponse): ExecResponse.AsObject;
  static serializeBinaryToWriter(message: ExecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecResponse;
  static deserializeBinaryFromReader(message: ExecResponse, reader: jspb.BinaryReader): ExecResponse;
}

export namespace ExecResponse {
  export type AsObject = {
    auth?: authPacket.AsObject,
    response: string,
    insertId: number,
    affectedRows: number,
    duration?: duration.AsObject,
  }
}

export class QueryRequest extends jspb.Message {
  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): QueryRequest;
  hasAuth(): boolean;
  clearAuth(): QueryRequest;

  getStatement(): string;
  setStatement(value: string): QueryRequest;

  getMaxResponseLength(): number;
  setMaxResponseLength(value: number): QueryRequest;

  getBatchSize(): number;
  setBatchSize(value: number): QueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    auth?: authPacket.AsObject,
    statement: string,
    maxResponseLength: number,
    batchSize: number,
  }
}

export class QueryResponse extends jspb.Message {
  getAuth(): authPacket | undefined;
  setAuth(value?: authPacket): QueryResponse;
  hasAuth(): boolean;
  clearAuth(): QueryResponse;

  getRespLength(): number;
  setRespLength(value: number): QueryResponse;

  getRespSchema(): schema | undefined;
  setRespSchema(value?: schema): QueryResponse;
  hasRespSchema(): boolean;
  clearRespSchema(): QueryResponse;

  getResultSetList(): Array<row>;
  setResultSetList(value: Array<row>): QueryResponse;
  clearResultSetList(): QueryResponse;
  addResultSet(value?: row, index?: number): row;

  getDuration(): duration | undefined;
  setDuration(value?: duration): QueryResponse;
  hasDuration(): boolean;
  clearDuration(): QueryResponse;

  getDone(): boolean;
  setDone(value: boolean): QueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    auth?: authPacket.AsObject,
    respLength: number,
    respSchema?: schema.AsObject,
    resultSetList: Array<row.AsObject>,
    duration?: duration.AsObject,
    done: boolean,
  }
}

export class CloseQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseQueryResponse): CloseQueryResponse.AsObject;
  static serializeBinaryToWriter(message: CloseQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseQueryResponse;
  static deserializeBinaryFromReader(message: CloseQueryResponse, reader: jspb.BinaryReader): CloseQueryResponse;
}

export namespace CloseQueryResponse {
  export type AsObject = {
  }
}

export class schema extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): schema;

  getColumnNameList(): Array<string>;
  setColumnNameList(value: Array<string>): schema;
  clearColumnNameList(): schema;
  addColumnName(value: string, index?: number): schema;

  getColumnTypeList(): Array<datatype>;
  setColumnTypeList(value: Array<datatype>): schema;
  clearColumnTypeList(): schema;
  addColumnType(value: datatype, index?: number): schema;

  getColumnSizeList(): Array<number>;
  setColumnSizeList(value: Array<number>): schema;
  clearColumnSizeList(): schema;
  addColumnSize(value: number, index?: number): schema;

  getColumnIsNullableBitmap(): Uint8Array | string;
  getColumnIsNullableBitmap_asU8(): Uint8Array;
  getColumnIsNullableBitmap_asB64(): string;
  setColumnIsNullableBitmap(value: Uint8Array | string): schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): schema.AsObject;
  static toObject(includeInstance: boolean, msg: schema): schema.AsObject;
  static serializeBinaryToWriter(message: schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): schema;
  static deserializeBinaryFromReader(message: schema, reader: jspb.BinaryReader): schema;
}

export namespace schema {
  export type AsObject = {
    tableName: string,
    columnNameList: Array<string>,
    columnTypeList: Array<datatype>,
    columnSizeList: Array<number>,
    columnIsNullableBitmap: Uint8Array | string,
  }
}

export class row extends jspb.Message {
  getColumnsList(): Array<Uint8Array | string>;
  setColumnsList(value: Array<Uint8Array | string>): row;
  clearColumnsList(): row;
  addColumns(value: Uint8Array | string, index?: number): row;

  getNullColumnBitmap(): Uint8Array | string;
  getNullColumnBitmap_asU8(): Uint8Array;
  getNullColumnBitmap_asB64(): string;
  setNullColumnBitmap(value: Uint8Array | string): row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): row.AsObject;
  static toObject(includeInstance: boolean, msg: row): row.AsObject;
  static serializeBinaryToWriter(message: row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): row;
  static deserializeBinaryFromReader(message: row, reader: jspb.BinaryReader): row;
}

export namespace row {
  export type AsObject = {
    columnsList: Array<Uint8Array | string>,
    nullColumnBitmap: Uint8Array | string,
  }
}

export class CloseResponse extends jspb.Message {
  getSessionDuration(): string;
  setSessionDuration(value: string): CloseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseResponse): CloseResponse.AsObject;
  static serializeBinaryToWriter(message: CloseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseResponse;
  static deserializeBinaryFromReader(message: CloseResponse, reader: jspb.BinaryReader): CloseResponse;
}

export namespace CloseResponse {
  export type AsObject = {
    sessionDuration: string,
  }
}

export class LoadRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadRequest): LoadRequest.AsObject;
  static serializeBinaryToWriter(message: LoadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadRequest;
  static deserializeBinaryFromReader(message: LoadRequest, reader: jspb.BinaryReader): LoadRequest;
}

export namespace LoadRequest {
  export type AsObject = {
  }
}

export class LoadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoadResponse): LoadResponse.AsObject;
  static serializeBinaryToWriter(message: LoadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadResponse;
  static deserializeBinaryFromReader(message: LoadResponse, reader: jspb.BinaryReader): LoadResponse;
}

export namespace LoadResponse {
  export type AsObject = {
  }
}

export enum datatype { 
  UNDEF = 0,
  NULL = 1,
  BYTEARRAY = 2,
  STRING = 3,
  INT8 = 4,
  UINT8 = 5,
  INT16 = 6,
  UINT16 = 7,
  INT32 = 8,
  UINT32 = 9,
  INT64 = 10,
  UINT64 = 11,
  FLOAT32 = 12,
  FLOAT64 = 13,
  BOOL = 14,
  TIMESTAMP = 15,
  UUID = 16,
}
