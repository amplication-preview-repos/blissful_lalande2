import { Configuration as TConfiguration } from "../api/configuration/Configuration";

export const CONFIGURATION_TITLE_FIELD = "name";

export const ConfigurationTitle = (record: TConfiguration): string => {
  return record.name?.toString() || String(record.id);
};
