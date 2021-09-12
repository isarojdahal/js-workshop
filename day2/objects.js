var book = {
  name: "5 Am Club",
  author: "Robin Sharma",
  description() {
    console.log("Great book");
  },
  others() {},
};

book.name = "ABC";
book["name"] = "ABC";

console.log(book);


