import * as QueryString from "query-string";

export interface Arguments {
  userId: string;
  rivals: Array<string>;
  kind: string;
  ranking: string;
}

export class ArgumentParser {
  static parse(): Arguments {
    let params = QueryString.parse(location.search);
    let userId: string = "user" in params ? params["user"] : "";
    let rivals: string = "rivals" in params ? params["rivals"] : "";
    let kind: string = "kind" in params ? params["kind"] : "category";
    let ranking: string = "ranking" in params ? params["ranking"] : "ac";
    return {
      userId: userId,
      rivals: rivals.split(",").filter(r => r.length > 0),
      kind: kind,
      ranking: ranking
    };
  }
}
