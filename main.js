let btn = document.querySelector("form .btn");
let input = document.querySelector("form .date");
let p = document.querySelector("p");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let nowDate = new Date();
    let chooseDate = new Date(input.value);

    if (input.value === "") {
        p.innerHTML = "Enter Your Date";
    } else if (nowDate.getTime() <= chooseDate.getTime()) {
        p.innerHTML = "date is Invalid";
    } else {
        let d1 = chooseDate.getDate();
        let m1 = chooseDate.getMonth() + 1;
        let y1 = chooseDate.getFullYear();

        let d2 = nowDate.getDate();
        let m2 = nowDate.getMonth() + 1;
        let y2 = nowDate.getFullYear();

        let d3, m3, y3;

        // For Get Year
        y3 = y2 - y1;

        // For Get Month
        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        // For Get Day
        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        function getDaysInMonth(year, month) {
            return new Date(year, month, 0);
        }
        p.innerHTML = `Your age is <span>${y3}</span>, <span>${m3}</span> months and <span>${d3}</span> days old`;
    }
});
