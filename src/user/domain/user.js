export default function user(id, name, jobType, createdAt, city, zipCode, address, gender) {
    return {
      getId: () => id,
      getName: () => name,
      getJobType: () => jobType,
      toJson: () => {
        return {
            id,
            name,
            jobType
        }
      }
    };
  }