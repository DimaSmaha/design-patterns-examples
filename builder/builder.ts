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
