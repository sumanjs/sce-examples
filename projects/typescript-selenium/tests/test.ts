import "chromedriver";
import { By } from "selenium-webdriver";
import { SCETestHelper } from "@sce/code-generation";

// describe("Submit ideas", () => {
//   let pages: AllPages;

//   before(async () => {
//     pages = new AllPages(new Browser("chrome"));
//   });

//   it("Test Case #1: Unauthenticated cannot submit ideas", async () => {
//     // Action
//     await pages.home.navigate();
//     await pages.home.IdeaTitle.type("Add support to TypeScript");

//     // Assert
//     await Promise.all([
//       ensure(pages.home.UserMenu).textIs("Sign in"),
//       ensure(pages.home.SubmitIdea).isNotVisible(),
//       ensure(pages.home.IdeaDescription).isNotVisible(),
//     ]);
//   });

//   it("Test Case #2: Authenticated can submit ideas", async () => {
//     // Action
//     await pages.home.navigate();
//     await pages.home.signInWithGoogle();
//     await pages.google.signInAsDarthVader();

//     // Assert
//     await ensure(pages.home.UserMenu).textIs("Darth Vader");

//     // Action
//     await pages.home.submitNewIdea(
//       "Host a TypeScript workshop!",
//       "Workshop would be useful to have hands-on practice with the language."
//     );

//     // Assert
//     await Promise.all([
//       ensure(pages.showIdea.Title).textIs("Host a TypeScript workshop!"),
//       ensure(pages.showIdea.Description).textIs(
//         "Workshop would be useful to have hands-on practice with the language."
//       ),
//       ensure(pages.showIdea.SupportCounter).textIs("1"),
//     ]);
//   });

//   after(async () => {
//     await pages.dispose();
//   });
// });

// Tool will output a single top-level "describe" block
describe("SCE Test Session", () => {
  // It then creates a "test" object, which is used below.
  const session = new SCETestHelper("chrome");

  describe("navigate", async () => {
    // First navigate to the starting page.
    before(async () => {
      await session.get("https://coderescue.guru");
    });

    it("Page loaded", async () => {
      // Assert
      await Promise.all([
        await session
          .ensure(By.id("code-rescue-services-virtual-cto-for-hire"))
          .hasText("Code Rescue Services/Virtual CTO For Hire"),
        // await test.ensure(By.css("some other css selector")).hasText("some text"),
      ]);
    });
  });

  describe("click", async () => {
    before(async () => {
      // Action (will throw on an action failure)
      await session.click(By.id("some_id"));
      // Alternate version of action that uses xpath
      // await test.click(By.xpath("minimal/xpath/to/link/to/click"));
    });

    // Then one "it" clause per action.
    // If a user desires, the individual lines (like test.click) could
    // be moved into the "before" clause above. It doesn't make a difference
    // except how any error is reported.
    it("User can click on [link]", async () => {
      // Assert
      await Promise.all([
        // await test.ensure(By.css("some css selector")).isEnabled(),
        // await test.ensure(By.css("some other css selector")).hasText("some text"),
      ]);
    });
  });

  describe("text", async () => {
    before(async () => {
      // Action (will throw on an action failure)
      await session.sendKeys(By.id("some_other_id"), "text to type", "more text");
      // Alternate version of action that uses xpath
      // await test.click(By.xpath("minimal/xpath/to/link/to/click"));
    });

    // The second action in this example.
    it("User can type in text", async () => {
      // Assert
      await Promise.all([
        // await test.ensure(By.css("some css selector")).isEnabled(),
        // await test.ensure(By.css("some other css selector")).hasText("some text"),
      ]);
    });
  });

  // The "shutdown" that closes out the browser.
  after(async () => {
    await session.close();
  });
});
