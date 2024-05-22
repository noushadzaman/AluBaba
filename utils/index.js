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

export function calculatePrice(discount, price, items = 1) {
  if (discount) {
    return (price - (price * discount) / 100) * items;
  } else {
    return price * items;
  }
}