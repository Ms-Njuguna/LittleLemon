describe('Home Page', () => {
  // Runs before every test
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('loads the homepage successfully', () => {
    // Basic sanity check
    cy.contains('Little Lemon')
  })

  it('renders all main homepage sections', () => {
    cy.get('[data-cy="hero-section"]').should('exist')
    cy.get('[data-cy="specials-section"]').should('exist')
    cy.get('[data-cy="testimonials-section"]').should('exist')
    cy.get('[data-cy="about-section"]').should('exist')
  })

  it('displays the About section title', () => {
    cy.get('[data-cy="about-title"]')
      .should('be.visible')
      .and('contain.text', 'A Little Back Story')
  })

  it('shows the restaurant back story text', () => {
    cy.get('[data-cy="about-text"]')
      .should('contain.text', 'Little Lemon is owned by two Italian brothers')
  })

  it('renders the About section images', () => {
    cy.get('[data-cy="about-images"] img')
      .should('have.length', 2)

    cy.get('[data-cy="about-images"] img')
      .each(($img) => {
        cy.wrap($img).should('be.visible')
      })
  })
})
