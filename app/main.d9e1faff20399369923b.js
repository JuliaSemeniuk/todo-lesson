(() => {
  "use strict";
  var e = "todos";
  function t() {
    var t = sessionStorage.getItem(e);
    return t ? JSON.parse(t) : [];
  }
  var o = function (o, d) {
    var s = document.createElement("li");
    s.classList.add("todo-item"),
      "completed" === d && s.classList.add("todo-item_completed");
    var i = document.createElement("span");
    (i.innerText = o), i.classList.add("todo-text"), s.appendChild(i);
    var a = document.createElement("button");
    (a.innerHTML = '<i class="fas fa-check"></i>'),
      a.classList.add("todo-check-button"),
      a.addEventListener(
        "click",
        (function (o) {
          return function (n) {
            n.preventDefault(),
              o.classList.toggle("todo-item_completed"),
              (function (o) {
                var n = t(),
                  d = Array.from(o.childNodes).find(function (e) {
                    return e.classList.contains("todo-text");
                  });
                if (d) {
                  var s = n.findIndex(function (e) {
                    return e.value === d.innerText;
                  });
                  "uncompleted" === n[s].status
                    ? (n[s].status = "completed")
                    : (n[s].status = "uncompleted"),
                    sessionStorage.setItem(e, JSON.stringify(n));
                }
              })(o);
          };
        })(s)
      ),
      s.appendChild(a);
    var l = document.createElement("button");
    return (
      (l.innerHTML = '<i class="fas fa-trash"></i>'),
      l.classList.add("todo-remove-button"),
      l.addEventListener(
        "click",
        (function (o) {
          return function (d) {
            d.preventDefault(),
              o.classList.add("todo-item_fall"),
              o.addEventListener("transitionend", function () {
                !(function (o) {
                  var n = t(),
                    d = Array.from(o.childNodes).find(function (e) {
                      return e.classList.contains("todo-text");
                    });
                  if (d) {
                    var s = n.filter(function (e) {
                      return e.value !== d.innerText;
                    });
                    sessionStorage.setItem(e, JSON.stringify(s));
                  }
                })(o),
                  o.remove(),
                  n();
              });
          };
        })(s)
      ),
      s.appendChild(l),
      s
    );
  };
  function n() {
    var e = t();
    console.log("todos: ", e);
    var o = document.querySelector(".todo-select");
    e.length
      ? (o.removeAttribute("disabled", "disabled"),
        console.log("todoSelect: ", o))
      : o.setAttribute("disabled", "disabled");
  }
  function d() {
    return {
      todoInput: document.querySelector(".todo-input"),
      todoHelper: document.querySelector(".todo-helper"),
      todoButton: document.querySelector(".todo-button"),
    };
  }
  document.querySelector(".todo-input-wrapper");
  var s = d(),
    i = s.todoInput,
    a = s.todoButton,
    l = document.querySelector(".todo-list"),
    r = document.querySelector(".todo-select");
  function c(s) {
    if (
      !(
        (s.keyCode && 13 !== s.keyCode) ||
        (s.preventDefault(), i.value.length < 3)
      )
    ) {
      var a, r;
      console.log("input value", i.value.length),
        (a = i.value),
        (r = t()).push({ id: r.length + 1, value: a, status: "uncompleted" }),
        sessionStorage.setItem(e, JSON.stringify(r));
      var c = o(i.value);
      l.appendChild(c),
        (function () {
          var e = d(),
            t = e.todoInput,
            o = e.todoHelper,
            n = e.todoButton;
          (t.value = ""),
            n.classList.add("todo-button_disabled"),
            o.classList.add("todo-helper_visible");
        })(),
        n();
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    t().forEach(function (e) {
      var t = o(e.value, e.status);
      l.appendChild(t);
    });
  }),
    i.addEventListener("input", function () {
      var e = d(),
        t = e.todoInput,
        o = e.todoHelper,
        n = e.todoButton;
      t.value.length >= 3
        ? (n.classList.remove("todo-button_disabled"),
          o.classList.remove("todo-helper_visible"))
        : (n.classList.add("todo-button_disabled"),
          o.classList.add("todo-helper_visible"));
    }),
    i.addEventListener("focus", function () {
      d().todoHelper.classList.add("todo-helper_visible");
    }),
    i.addEventListener("blur", function () {
      d().todoHelper.classList.remove("todo-helper_visible");
    }),
    a.addEventListener("click", c),
    i.addEventListener("keypress", c),
    r.addEventListener("change", function (e) {
      var t, o;
      (t = l.childNodes),
        (o = e.target.value),
        t.length &&
          t.forEach(function (e) {
            switch (o) {
              case "completed":
                e.classList.contains("todo-item_completed")
                  ? (e.style.display = "flex")
                  : (e.style.display = "none");
                break;
              case "uncompleted":
                e.classList.contains("todo-item_completed")
                  ? (e.style.display = "none")
                  : (e.style.display = "flex");
                break;
              default:
                return void (e.style.display = "flex");
            }
          });
    });
})();
