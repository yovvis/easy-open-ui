const { generateService } = require("@umijs/openapi")

generateService({
    requestLibPath: "import request from '@/utils/request'",
    schemaPath: "http://localhost:8101/api/oss/v2/api-docs",
    requestOptionsType: null,
    serversPath: "./src/servers/oss"
})
