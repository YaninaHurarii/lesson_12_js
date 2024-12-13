/* 
Теоретичні питання
1. Як можна визначити, яку саме клавішу клавіатури натиснув користувач?
2. Яка різниця між event.code() та event.key()?
3. Які три події клавіатури існує та яка між ними відмінність?

Практичне завдання.
Реалізувати функцію підсвічування клавіш.

Технічні вимоги:

- У файлі index.html лежить розмітка для кнопок.
- Кожна кнопка містить назву клавіші на клавіатурі
- Після натискання вказаних клавіш - та кнопка, на якій написана ця літера, повинна фарбуватися в синій колір. При цьому якщо якась інша літера вже раніше була пофарбована в синій колір - вона стає чорною. Наприклад за натисканням Enter перша кнопка забарвлюється у синій колір. Далі, користувач натискає S, і кнопка S забарвлюється в синій колір, а кнопка Enter знову стає чорною.
Але якщо при натискані на кнопку її  не існує в розмітці, то попередня активна кнопка повина стати неактивною.
*/
 
const Allbtn = document.getElementsByTagName("button");
let previousBtn = null;

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  let foundBtn = false;

  for (let i = 0; i < Allbtn.length; i++) {
    Allbtn[i].style.backgroundColor = "#000000";
  }

  for (let i = 0; i < Allbtn.length; i++) {
    const button = Allbtn[i];
    if (button.textContent.trim().toLowerCase() === key) {
        button.style.backgroundColor = "#0000ff";
        foundBtn = true;

        previousBtn = button;
        break;
    }
  }

    if (!foundBtn && previousBtn) {
      previousBtn.disabled = true;
      previousBtn.style.backgroundColor = "#808080";
      previousBtn.style.pointerEvents = "none";
    }
});