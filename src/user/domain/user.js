export default function user(id, name, jobType) {
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