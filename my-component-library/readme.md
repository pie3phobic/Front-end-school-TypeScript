Simple library that includes 3 custom UI components:

1. MediumCard (images, text, styling, dark theme and hover effects);
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/0d089bfe-0346-4def-b16a-5930152f2f9d)
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/308c6841-356c-482f-8e46-174ed1e5d580)
2. InfoCard - styled card that contains course information (fully responsive on mobile, tablets and desktop, option to redirect to given page and pass id prop, dark theme, hover effects, uses Next.js's optimized Image);
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/01bd2ad6-16a0-4e95-b543-9cc890ba3ac5)
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/a95ee3a7-9b14-49cb-9f2e-536ab7f985f2)
   On mobile:
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/0cd4de42-0cae-4814-a54a-1a7d774e1fb8)
3. Pagination (dark theme, fully functional and customizable);
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/7962a70c-1b69-42f8-9066-29e7eb6ae82d)
   ![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/047d4d05-4b30-442d-bf89-36641551f90d)

# Insallation

## `npm i minty-ui-library`

# Usage

1. Create a **`minty-ui.d.ts`** file in the root of your project with a following code:

### `declare module "minty-ui-library";`

4. Make sure that you have installed the latest version in you `package.json` file's `"dependencies"` section
5. Make sure your project includes all needed dependecies.
6. Import components and use them in your project :]

### `import { MediumCard, InfoCard, Pagination } from "minty-ui-library";`

- MeduimCard:

```
            <MediumCard
              src="pic-sample.png"
              alt="Sample image"
              text="This is the text under picture"
            />
```

- Pagination:

```
  const data= yourDataArrayOfObjects;
  const [currentPage, setCurrentPage] = useState<number>(1);  //first page number
  const pageSize: number = 10; //how many items should each page consist of
  const onPageChange: PaginationProps["onPageChange"] = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 20, behavior: "smooth" });
  }; //example of function that will be executed every time that you click on another page

      <Pagination
          items={data.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
      />
```

- InfoCard:

```
  const lessonsMeta = { skills: ["Lesson1", "Lesson2"] };
       <InfoCard
          path={"/course"}
          description={"Course Description"}
          id={"1"}
          lessonsCount={5}
          meta={lessonsMeta}
          previewImageLink={"https://image-link.png"}
          rating={5}
          title={"Course Title"}
        />
```
