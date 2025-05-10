import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../data/teammembers';

const TeamMembers = teamMembers

const TeamSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-sm text-blue-600 uppercase text-center">Our Team</h2>
      <h3 className="text-3xl font-bold text-center mb-12">
        An incredible team of amazing individuals
      </h3>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TeamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
