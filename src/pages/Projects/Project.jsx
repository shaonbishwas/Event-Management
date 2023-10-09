import PropTypes from 'prop-types'
import './project.css'

const Project = ({projectData}) => {
    const {name, banner, description} = projectData
    
    return (
        <div id='main' className='relative'>
            <img src={banner} className='h-full ' alt="" />
            <div className='absolute h-full w-full top-0 bg-black opacity-25 col'></div>
            <div id='text' className='p-5 absolute bottom-0 text-white'>
            <h1 className='text-2xl lg:text-4xl font-bold'>{name}</h1>
            <p className='text-xs lg:text-base'>{description}</p>
            </div>
        </div>
    );
};
Project.propTypes ={
    projectData: PropTypes.object
}
export default Project;