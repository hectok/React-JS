import React from "react";
import { mount } from "enzyme";
import "../../enzymeConfig";
import Login from "../Login/Login.page.jsx";

describe("Test login form", function () {
    let wrapper;

    it("Usuario creada correctamente", function () {
        wrapper = mount(<Login />);
        wrapper.find('input[type="text"]').simulate("change", {
            target: { id: "username", value: "world" }
        });
        expect(wrapper.state("username")).toEqual("world");
    });

    it("Contraseña creada correctamente", function () {
        wrapper = mount(<Login />);
        wrapper.find('input[type="text"]').simulate("change", {
            target: { id: "password", value: "123" }
        });
        expect(wrapper.state("password")).toEqual("123");
    });

    it("Testeo de login con los datos correctos", () => {
        wrapper = mount(<Login />);
        wrapper
            .find('input[type="text"]')
            .simulate("change", { target: { id: "username", value: "world" } });
        wrapper
            .find('input[type="password"]')
            .simulate("change", { target: { id: "password", value: "123" } });
        wrapper.find("button").simulate("click");
        expect(wrapper.state("loggedIn")).toBe(true);
    });
});
