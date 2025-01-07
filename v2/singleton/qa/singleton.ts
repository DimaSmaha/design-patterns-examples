export class GetCatToken {
  static catToken: string | null = null;
  static catApi: string = "https://catfact.ninja/fact?max_length=64";

  static async getCatToken() {
    if (this.catToken === null) {
      const res = await fetch(this.catApi);
      const body = await res.json();
      this.catToken = body.fact;
      return this.catToken ?? "default";
    }
    return GetCatToken.catToken;
  }
}
