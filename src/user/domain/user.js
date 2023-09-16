export default function user(id, name, jobType, createdAt, city, zipCode, address, gender) {
    return {
      getId: () => id,
      getName: () => name,
      getJobType: () => jobType,
      getCreatedAt: () => createdAt,
      getCity: () => city,
      getZipCode: () => zipCode,
      getAddress: () => address,
      gender: () => gender,
      toJson: () => {
        return {
            id,
            name,
            jobType,
            createdAt,
            city,
            zipCode,
            address,
            gender
        }
      }
    };
  }
  