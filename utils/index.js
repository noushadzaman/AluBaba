export async function transformArray(items) {
  const newItems = items
    .map((item) => {
      return {
        id: item?._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => {
      return rest;
    });
  return newItems;
}

export async function transformObj(items) {
  const { _id, ...rest } = items;
  return {
    id: items._id.toString(),
    ...rest,
  };
}
