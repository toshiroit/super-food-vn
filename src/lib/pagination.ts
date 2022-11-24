export const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

export const arrPagination = (totalPages: number, current_page: number) => {
  const totalNumbers = 2 * 2 + 2;
  const totalBlocks = totalNumbers + 2;
  let tempData = [];
  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, current_page - 2);
    const endPage = Math.min(
      totalPages - 1,
      current_page + 2
    );
    let pages = range(startPage, endPage);

    tempData = [1, ...pages, totalPages];
  } else {
    for (let i = 1; i <= totalPages; i++) {
      tempData.push(i);
    }
  }
  return tempData
}
