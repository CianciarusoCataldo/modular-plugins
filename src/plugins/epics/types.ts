import { Epic } from "redux-observable";
import { ModularEnginePlugin } from "modular-engine-types";

export type EpicsPlugin = ModularEnginePlugin<{
  epics?: Epic[];
}>;
