const TeamMember= ({image, name, info, email, country}) => (
  <li className="team-member">
    <span className="team-member_country">{country}</span>
    <img src={image} alt={name} className="team-member_picture" />
    <div className="team-member_details">
      <h2 className="team-member_name">{name}</h2>
      <p className="team-member_info">{info}</p>
      <div className="red-divider"></div>
      <span className="team-member_email">{email}</span>
    </div>
    <style jsx>{`
      .team-member {
        padding: 0 15px;
        display: flex;
        position: relative;
      }

      .team-member_country {
        position: absolute;
        top: 0;
        left: 100px;
        opacity: 0.08;
        font-size: 54px;
        color: #182E8C;
        line-height: 33px;
        text-transform: capitalize;
      }

      .team-member_picture {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      .team-member_details {
        margin-left: 18px;
      }

      .team-member_name {
        margin: 8px 0 5px;
        font-size: 26px;
        color: #182E8C;
        font-weight: 400;
      }

      .team-member_info {
        margin: 0;
        font-size: 14px;
        color: #182E8C;
        margin: 0 0 15px;
      }

      .red-divider {
        position: relative;
        width: 16px;
        height: 3px;
        margin: 0;
        border: none;
        background-color: #FD1C40;
        text-align: left;
      }

      .red-divider:after{
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        width: 5px;
        height: 100%;
        background-color: rgba(253, 28, 64, 0.12);
      }

      .team-member_email {
        display: block;
        margin-top: 26px;
        font-size: 16px;
        line-height: 25px;
        color: #182E8C;
      }
    `}</style>
  </li>
)

export default TeamMember