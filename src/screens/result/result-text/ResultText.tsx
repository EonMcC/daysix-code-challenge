import type { FC } from "react"

export const ResultText: FC<{
  reps: number;
  showAll: boolean;
}> = ({
  reps,
  showAll
}) => {

    if (reps > 20) return (
      <>
        <p>Excellent result! Your score is higher than average. This is a great sign of your current strength and balance</p>
        <p>New actionable tips</p>
        <ul>
          <li>
            To keep this advantage, continue your current activities and consider adding variety. For example, if you walk, try routes with hills. If you do strength exercises, ensure you're including movements that challenge your legs in different ways (like lunges or step-ups safely). This helps keep your muscles adaptable and strong.
          </li>
          {showAll && (
            <li>
              Challenge your excellent balance further. Try activities like Tai Chi, yoga, or even simple exercises like standing on one leg for 15-30 seconds while brushing your teeth (ensure you have support nearby if needed). This enhances your stability, further protecting against falls.
            </li>
          )}
        </ul>
      </>
    )

    if (reps >= 12 && reps <= 19) return (
      <>
        <p>Nice work! Your performance is on par with others your age and gender. This is a great baseline - you can continue to build from here!</p>
        <p>Actionable tips</p>
        <ul>
          <li>
            Incorporate more 'sit-to-stands' into your daily routine. For example, each time you sit down or stand up from a chair at home or work, do it mindfully, perhaps a couple of extra times. Try to use your leg muscles more and rely less on your arms. This directly strengthens the muscles used in the test.
          </li>
          {showAll && (
            <li>
              Add two 10-minute 'strength snacks' to your week. This could be as simple as doing 2-3 sets of 8-12 bodyweight squats (focus on good form, going as low as comfortable) or calf raises. Small, regular efforts make a big difference in maintaining and improving the strength this test measures.
            </li>
          )}
        </ul>
      </>
    )

    if (reps < 12) return (
      <>
        <p>You've taken a positive step by doing the test! While your score is currently below average, this is valuable information. Let's look at ways to gradually build your strength and balance</p>
        <p>Actionable tips</p>
        <ul>
          <li>
            Start by practicing the sit-to-stand motion safely. Sit towards the front of a sturdy chair, feet flat. If needed, use the armrests to help you push up to a full stand, and then control your movement back down. Aim for 5-8 repetitions, 1-2 times a day. Focus on quality over quantity. As you get stronger, try to use your arms less.
          </li>
          {showAll && (
            <>
              <li>
                Incorporate simple leg-strengthening exercises. While seated, you can do leg extensions (straighten one knee, hold for a few seconds, then lower slowly). Or, try heel raises and toe raises while seated or standing (holding onto a counter for support). Aim for 10-15 repetitions of each, a few times a week. These build the foundational strength needed for better sit-stand performance and easier daily movement.
              </li>
              <li>
                If comfortable and safe for you, try to add short walks to your day, even 5-10 minutes. Walking helps build overall leg endurance and strength. Start slow and gradually increase your time or distance as you feel able. Every step helps!
              </li>
            </>
          )}
        </ul>
      </>
    )
  }