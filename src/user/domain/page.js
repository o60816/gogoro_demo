export default function page(curPage, totalPage, limit, hasPrevPage, hasNextPage) {
    return {
      getCurPage: () => curPage,
      getTotalPage: () => totalPage,
      getLimit: () => limit,
      getHasPrevPage: () => hasPrevPage,
      getHasNextPage: () => hasNextPage,
      toJson: () => {
        return {
            curPage,
            totalPage,
            limit,
            hasPrevPage,
            hasNextPage
        }
      }
    };
  }
  