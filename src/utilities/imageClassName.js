export default function imageCalssName(index) {
  if (index % 6 === 0) {
    return "--wide";
  } else if (index % 3 === 0) {
    return "--tall";
  } else {
    return "";
  }
}
