import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from '../../../app/components/page/LandingPage';

describe('LandingPage', () => {
  it('renders the component without crashing', () => {
    render(<LandingPage />);
    expect(screen.getByTestId('landing-page-container')).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    render(<LandingPage />);

    const heading = screen.getByTestId('landing-page-title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Welcome to HarperDB Next.js Application');
  });

  it('renders the separator', () => {
    render(<LandingPage />);
    expect(screen.getByTestId('landing-page-separator')).toBeInTheDocument();
  });

  it('displays all informational paragraphs with correct content', () => {
    render(<LandingPage />);

    expect(screen.getByTestId('landing-page-intro')).toHaveTextContent(
      'This is a simple application that demonstrates how to use HarperDB with Next.js.'
    );

    expect(screen.getByTestId('landing-page-actions')).toHaveTextContent(
      'You can add, update, and delete characters from the database.'
    );

    expect(screen.getByTestId('landing-page-sse')).toHaveTextContent(
      'The application uses Server-Sent Events (SSE) to listen for changes in the database in real time.'
    );

    expect(screen.getByTestId('landing-page-seed-info')).toHaveTextContent(
      'To seed the database, run the following command in your terminal:'
    );
  });

  it('displays the seed command in a code block', () => {
    render(<LandingPage />);

    const codeBlock = screen.getByTestId('landing-page-code-block');
    expect(codeBlock).toBeInTheDocument();

    const seedCommand = screen.getByTestId('landing-page-seed-command');
    expect(seedCommand).toHaveTextContent('node seed.js');
  });

  it('has a content container with all required sections', () => {
    render(<LandingPage />);

    const contentContainer = screen.getByTestId('landing-page-content');
    expect(contentContainer).toBeInTheDocument();

    const contentSections = [
      'landing-page-intro',
      'landing-page-actions',
      'landing-page-sse',
      'landing-page-seed-info',
      'landing-page-code-block'
    ];

    contentSections.forEach(sectionId => {
      const section = screen.getByTestId(sectionId);
      expect(contentContainer).toContainElement(section);
    });
  });

  it('has proper semantic structure for accessibility', () => {
    render(<LandingPage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute('data-testid', 'landing-page-title');

    const headings = screen.queryAllByRole('heading');
    expect(headings.length).toBe(1);
  });

  it('renders all expected elements in the correct order', () => {
    render(<LandingPage />);

    const container = screen.getByTestId('landing-page-container');
    const children = Array.from(container.children);

    expect(children[0]).toHaveAttribute('data-testid', 'landing-page-title');
    expect(children[1]).toHaveAttribute('data-testid', 'landing-page-separator');
    expect(children[2]).toHaveAttribute('data-testid', 'landing-page-content');
  });
});