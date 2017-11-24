import TeamMember from '/components/TeamMember'

const TeamSection = ({ t }) => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <ul className="team-members_container">
          <TeamMember
            image="./static/julio.png"
            name={t('teamSection.teamMembers.teamMember1.name')}
            info={t('teamSection.teamMembers.teamMember1.title')}
            email={t('teamSection.teamMembers.teamMember1.email')}
            country={t('teamSection.teamMembers.teamMember1.country')}
          />
          <TeamMember
            image="./static/pablo.png"
            name={t('teamSection.teamMembers.teamMember2.name')}
            info={t('teamSection.teamMembers.teamMember2.title')}
            email={t('teamSection.teamMembers.teamMember2.email')}
            country={t('teamSection.teamMembers.teamMember2.country')}
          />
        </ul>
      </div>
    </div>
    <style jsx>{`
      .inner-wrapper {
        max-width: 896px;
      }

      .team-members_container {
        display: flex;
        flex-direction: column;
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

      @media (min-width: 992px) {
        .team-members_container {
          flex-direction: row;
        }
      }
    `}</style>
  </section>
)

export default TeamSection