import TeamMember from '/components/TeamMember'

const TeamSection = () => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <ul className="team-members_container">
          <TeamMember image="http://www.teequilla.com/images/tq/empty-avatar.png" name="Julio Alvarez" info="Founder / Head of Economic Research" email="julio@coinest.co" country="arg"/>
          <TeamMember image="http://www.teequilla.com/images/tq/empty-avatar.png" name="Pablo Wilner" info="Founder / Head of Operations" email="pablo@coinest.co" country="arg"/>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .inner-wrapper {
        max-width: 896px;
      }

      .team-members_container {
        display: flex;
        padding: 0;
        padding-top: 32px;
        padding-bottom: 60px;
        margin-left: -15px;
        margin-right: -15px;
        margin-top: 0;
        margin-bottom: 0;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
    `}</style>
  </section>
)

export default TeamSection