describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  const baseUrl = "../index.html";
  const SELECTOR = {
    INPUT: "#user-input",
    SUBMIT: "#submit",
    RESULT: "#result",
  };

  before(() => {
    Cypress.Commands.add("stubRandomReturns", (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: (window) => {
          window.MissionUtils = {
            Random: {
              pickNumberInRange: randomStub,
            },
          };
        },
      });
    });

    Cypress.Commands.add("typeUserInput", (userInput = "") => {
      cy.get(SELECTOR.INPUT).type(userInput);
      cy.get(SELECTOR.SUBMIT).click();
    });
  });

  it("힌트 텍스트의 형식이 요구사항과 일치해야 한다.", () => {
    // given
    cy.stubRandomReturns([4, 2, 5]);

    // when
    cy.typeUserInput("456");

    // then
    cy.get(SELECTOR.RESULT).should("have.text", "1볼 1스트라이크");

    // when
    cy.get(SELECTOR.INPUT).clear();
    cy.typeUserInput("136");

    // then
    cy.get(SELECTOR.RESULT).should("have.text", "낫싱");
  });

  it("잘못된 값을 입력한 경우 alert이 호출되어야 한다.", () => {
    // given
    const alertStub = cy.stub();
    const invalidInput = "1234";

    cy.stubRandomReturns([4, 2, 5]);
    cy.on("window:alert", alertStub);

    // when
    cy.get(SELECTOR.INPUT).type(invalidInput);

    // then
    cy.get(SELECTOR.SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});
