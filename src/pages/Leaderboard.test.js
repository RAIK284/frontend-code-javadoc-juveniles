import { render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import LeaderBoard from './Leaderboard'


describe('Leaderboard', () => {
  it('should render', async () => {
    const { getByText } = render(
      <LeaderBoard />
    );

    await waitFor(() => expect(getByText('Leaderboard')).toBeVisible())
  })

  it('should show Coin Leaderboard Data', async () => {
    const { getByText } = render(
      <LeaderBoard />
    );

    await waitFor(() => expect(getByText('Leaderboard')).toBeVisible())
    await waitFor(() => expect(getByText('Total Coins Earned')).toBeVisible())
  })

  it('should show Xp Leaderboard Data', async () => {
    const { getByText } = render(
      <LeaderBoard />
    );

    await waitFor(() => 
      fireEvent(
        getByText('ALL-TIME XP USED'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      ) 
    )

    await waitFor(() => expect(getByText('Leaderboard')).toBeVisible())
    await waitFor(() => expect(getByText('Total XP Used')).toBeVisible())
  })

  it('should show Coin Leaderboard Data after showing Xp Data', async() => {
    const { getByText } = render(
      <LeaderBoard />
    );

    await waitFor(() => fireEvent(
      getByText('ALL-TIME XP USED'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    ))

    await waitFor(() => fireEvent(
      getByText('ALL-TIME COINS EARNED'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    ))

    await waitFor(() => expect(getByText('Leaderboard')).toBeVisible())
    await waitFor(() => expect(getByText('Total Coins Earned')).toBeVisible())
  })
})