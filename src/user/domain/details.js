export default function details(createdAt, city, zipCode, address, gender) {
    return {
      getCreatedAt: () => createdAt,
      getCity: () => city,
      getZipCode: () => zipCode,
      getAddress: () => address,
      gender: () => gender,
      toJson: () => {
        return {
            createdAt,
            city,
            zipCode,
            address,
            gender
        }
      }
    };
  }
  