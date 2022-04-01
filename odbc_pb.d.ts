// package: odbc.v1
// file: protocolBuffers/odbc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DummyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DummyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DummyRequest): DummyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): InitializationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitializationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitializationRequest): InitializationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): XactRequest;
    getIsolationLevel(): number;
    setIsolationLevel(value: number): XactRequest;
    getReadOnly(): boolean;
    setReadOnly(value: boolean): XactRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XactRequest.AsObject;
    static toObject(includeInstance: boolean, msg: XactRequest): XactRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): XactResponse;
    getXactId(): number;
    setXactId(value: number): XactResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XactResponse.AsObject;
    static toObject(includeInstance: boolean, msg: XactResponse): XactResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): ExecRequest;
    getStatement(): string;
    setStatement(value: string): ExecRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecRequest): ExecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): ExecResponse;
    getResponse(): string;
    setResponse(value: string): ExecResponse;
    getInsertId(): number;
    setInsertId(value: number): ExecResponse;
    getAffectedRows(): number;
    setAffectedRows(value: number): ExecResponse;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): duration | undefined;
    setDuration(value?: duration): ExecResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecResponse): ExecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): QueryRequest;
    getStatement(): string;
    setStatement(value: string): QueryRequest;
    getMaxResponseLength(): number;
    setMaxResponseLength(value: number): QueryRequest;
    getBatchSize(): number;
    setBatchSize(value: number): QueryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): QueryResponse;
    getRespLength(): number;
    setRespLength(value: number): QueryResponse;

    hasRespSchema(): boolean;
    clearRespSchema(): void;
    getRespSchema(): schema | undefined;
    setRespSchema(value?: schema): QueryResponse;
    clearResultSetList(): void;
    getResultSetList(): Array<row>;
    setResultSetList(value: Array<row>): QueryResponse;
    addResultSet(value?: row, index?: number): row;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): duration | undefined;
    setDuration(value?: duration): QueryResponse;
    getDone(): boolean;
    setDone(value: boolean): QueryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearColumnNameList(): void;
    getColumnNameList(): Array<string>;
    setColumnNameList(value: Array<string>): schema;
    addColumnName(value: string, index?: number): string;
    clearColumnTypeList(): void;
    getColumnTypeList(): Array<datatype>;
    setColumnTypeList(value: Array<datatype>): schema;
    addColumnType(value: datatype, index?: number): datatype;
    clearColumnSizeList(): void;
    getColumnSizeList(): Array<number>;
    setColumnSizeList(value: Array<number>): schema;
    addColumnSize(value: number, index?: number): number;
    getColumnIsNullableBitmap(): Uint8Array | string;
    getColumnIsNullableBitmap_asU8(): Uint8Array;
    getColumnIsNullableBitmap_asB64(): string;
    setColumnIsNullableBitmap(value: Uint8Array | string): schema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): schema.AsObject;
    static toObject(includeInstance: boolean, msg: schema): schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearColumnsList(): void;
    getColumnsList(): Array<Uint8Array | string>;
    getColumnsList_asU8(): Array<Uint8Array>;
    getColumnsList_asB64(): Array<string>;
    setColumnsList(value: Array<Uint8Array | string>): row;
    addColumns(value: Uint8Array | string, index?: number): Uint8Array | string;
    getNullColumnBitmap(): Uint8Array | string;
    getNullColumnBitmap_asU8(): Uint8Array;
    getNullColumnBitmap_asB64(): string;
    setNullColumnBitmap(value: Uint8Array | string): row;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): row.AsObject;
    static toObject(includeInstance: boolean, msg: row): row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseResponse;
    static deserializeBinaryFromReader(message: CloseResponse, reader: jspb.BinaryReader): CloseResponse;
}

export namespace CloseResponse {
    export type AsObject = {
        sessionDuration: string,
    }
}

export class StoreFileRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): StoreFileRequest;
    getFileName(): string;
    setFileName(value: string): StoreFileRequest;
    getFileBytes(): Uint8Array | string;
    getFileBytes_asU8(): Uint8Array;
    getFileBytes_asB64(): string;
    setFileBytes(value: Uint8Array | string): StoreFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreFileRequest): StoreFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreFileRequest;
    static deserializeBinaryFromReader(message: StoreFileRequest, reader: jspb.BinaryReader): StoreFileRequest;
}

export namespace StoreFileRequest {
    export type AsObject = {
        auth?: authPacket.AsObject,
        fileName: string,
        fileBytes: Uint8Array | string,
    }
}

export class StoreFileResponse extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): authPacket | undefined;
    setAuth(value?: authPacket): StoreFileResponse;
    getInsertId(): number;
    setInsertId(value: number): StoreFileResponse;
    getFileSize(): number;
    setFileSize(value: number): StoreFileResponse;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): duration | undefined;
    setDuration(value?: duration): StoreFileResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreFileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreFileResponse): StoreFileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreFileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreFileResponse;
    static deserializeBinaryFromReader(message: StoreFileResponse, reader: jspb.BinaryReader): StoreFileResponse;
}

export namespace StoreFileResponse {
    export type AsObject = {
        auth?: authPacket.AsObject,
        insertId: number,
        fileSize: number,
        duration?: duration.AsObject,
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
    DATETIME = 16,
    DATE = 17,
    TIME = 18,
    UUID = 19,
}
