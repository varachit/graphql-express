
const config = {
  environment: process.env.NODE_ENV,
  hostname: process.env.HOSTNAME,
  port: process.env.PORT || 3000,
  apollo: {
    apollo_key: process.env.APOLLO_KEY,
    apollo_graph_ref: process.env.APOLLO_GRAPH_REF,
    apollo_schema_reporting: process.env.APOLLO_SCHEMA_REPORTING
  }
};

export default config;
