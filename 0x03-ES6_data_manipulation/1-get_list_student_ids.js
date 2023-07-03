export default function getListStudentIds(arrOfObjs) {
  if (!(Array.isArray(arrOfObjs))) {
    return [];
  }

  return arrOfObjs.map((obj) => obj.id);
}
