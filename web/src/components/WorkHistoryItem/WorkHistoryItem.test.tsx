import { render, screen } from '@redwoodjs/testing/web';

import WorkHistoryItem from './WorkHistoryItem';

describe('WorkHistoryItem', () => {
  it('renders successfully', () => {
    render(
      <WorkHistoryItem
        position="Test"
        company="Company"
        startDate={new Date()}
        projects={[
          {
            name: 'TestProject',
            description: 'TestDescription',
            tags: ['TestTag'],
          },
        ]}
      />
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('TestProject')).toBeInTheDocument();
    expect(screen.getByText('TestDescription')).toBeInTheDocument();
    expect(screen.getByText('TestTag')).toBeInTheDocument();
  });
});
