import { Wrap, Text } from "./AboutPage.styled";
export const AboutPage = () => {

  return (
    <>
      <Wrap>
        <h3>Пояснення про виконання завдання.</h3>
        <Text>
          Виконано рефакторинг коду застосунку «Книга контактів», додавши управління станом за допомогою бібліотеки Redux Toolkit. <br />
          Створено сховище з configureStore().<br />
          Використано функцію createSlice().<br />
          React-компоненти зв'язані з Redux-логікою за допомогою хуків бібліотеки react-redux.<br />
          Використано бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі.
        </Text>
      </Wrap>
    </>
  )
}