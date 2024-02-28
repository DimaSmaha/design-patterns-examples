// use npx ts-node ./test.ts to run a TS file
import { PetGenerator } from "./builder";

let newObj = new PetGenerator().setName("sad").build();

console.log(newObj);

let newObj2 = new PetGenerator()
  .setName("Tom")
  .setPhotoUrl(["link", "link2"])
  .setCategory({ id: 444, name: "Cat" })
  .setTags([
    { id: 465, name: "someName" },
    { id: 466, name: "someName2" },
  ])
  .build();

console.log(newObj2);
