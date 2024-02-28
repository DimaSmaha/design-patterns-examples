/**
 * In general we would use builder to create and construct some
 * hard objects. generally in API tests.
 * Beacuse u have some body and a lot of possible combinations of body u can send
 * To make it easier for u to get this different bodys we are creating builder
 * Where basically we specify all mandatory and not mandatory fields which will
 * help us to create different object, whatever we want, very fast and reliable
 *
 */

// Analyze your body and create an interface
// set ? for optional
// {
//   "id": 0,
//   "category": {
//     "id": 0,
//     "name": "string"
//   },
//   "name": "doggie",
//   "photoUrls": [
//     "string"
//   ],
//   "tags": [
//     {
//       "id": 0,
//       "name": "string"
//     }
//   ],
//   "status": "available"
// }

interface Pet {
  id?: number;
  category?: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: Array<string>; //string[]
  tags?: Array<{
    id: number;
    name: string;
  }>;
  status?: string;
}

export class PetGenerator {
  private pet: Pet = {
    name: "",
    photoUrls: [],
  };

  setCategory(category: { id: number; name: string }) {
    this.pet.category = category;
    return this;
  }

  setName(someName: string) {
    this.pet.name = someName;
    return this;
  }

  setPhotoUrl(arrayOfPhotos: string[]) {
    this.pet.photoUrls = arrayOfPhotos;
    return this;
  }

  setTags(tags: { id: number; name: string }[]) {
    this.pet.tags = tags;
    return this;
  }

  allMandatoryFieldsAreFilled() {
    return this.pet.name != "" && this.pet.photoUrls[0] != undefined;
  }

  build() {
    const isOk = this.allMandatoryFieldsAreFilled();
    if (isOk) {
      return this.pet as Pet;
    } else {
      console.log("the object is not full");
    }
  }
}
