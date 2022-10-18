import Button from './button/Button'
import './listButtons.scss'

const ListButtons = ()=>{
    return <div className="listButtons">
        <h2 className='titleButtons'>Buttons</h2>
        <div className='containerAllButtons'>
            <div className='buttonContainer' id='defaultNormalBT'>
                <span className='labelButton'>{'<Button />'}</span>
                <Button color='default' variant='normal' >Default</Button>
            </div>
            <div className='buttonContainer' id='defaultNormalBTHover'>
                <span className='labelButton labelButtonHover'>&:hover, &:focus</span>
                <Button color='defaultExampleHover' variant='normal' >Default</Button>
            </div>
            
            <div className='buttonContainer' id='primaryOutlineBT'>
                <span className='labelButton'>{'<Button variant="outline" />'}</span>
                <Button color='primary' variant='outline' >Default</Button>
            </div>
            <div className='buttonContainer' id='primaryOutlineBTHover'>
                <span className='labelButton labelButtonHover'>&:hover, &:focus</span>
                <Button color='primaryExampleHover' variant='outline' >Default</Button>
            </div>
            
            <div className='buttonContainer' id='primaryTextBT'>
                <span className='labelButton'>{'<Button variant="text" />'}</span>
                <Button color='primary' variant='text' >Default</Button>
            </div>
            <div className='buttonContainer' id='primaryTextBTHover'>
                <span className='labelButton labelButtonHover'>&:hover, &:focus</span>
                <Button color='primaryExampleHover' variant='text' >Default</Button>
            </div>

            <div className='buttonContainer' id='primaryNormalBTDisableShadow'>
                <span className='labelButton'>{'<Button disableShadow />'}</span>
                <Button color='primary' variant='normal' disableShadow >Default</Button>
            </div>
            
            <div className='buttonContainer' id='normalBTDisabled'>
                <span className='labelButton'>{'<Button disable />'}</span>
                <Button color='primary' variant='normal' disable >Default</Button>
            </div>
            <div className='buttonContainer' id='textBTDisabled'>
                <span className='labelButton'>{'<Button variant="text" disable />'}</span>
                <Button color='primary' variant='text' disable >Default</Button>
            </div>
            <div id='containerIconsBT'>
                <div className='buttonContainer' id='startIconBT'>
                    <span className='labelButton'>{'<Button startIcon="add_shopping_cart" />'}</span>
                    <Button color='primary' variant='normal' startIcon='add_shopping_cart'>Default</Button>
                </div>
                <div className='buttonContainer' id='endIconBT'>
                    <span className='labelButton'>{'<Button endIcon="add_shopping_cart" />'}</span>
                    <Button color='primary' variant='normal' endIcon='add_shopping_cart'>Default</Button>
                </div>
            </div>
            <div id='containerSizesBT'>
                <div className='buttonContainer' id='smBT'>
                    <span className='labelButton'>{'<Button size="sm" />'}</span>
                    <Button color='primary' variant='normal' size='sm'>Default</Button>
                </div>
                <div className='buttonContainer' id='mdBT'>
                    <span className='labelButton'>{'<Button size="md" />'}</span>
                    <Button color='primary' variant='normal' size='md'>Default</Button>
                </div>
                <div className='buttonContainer' id='lgBT'>
                    <span className='labelButton'>{'<Button size="lg" />'}</span>
                    <Button color='primary' variant='normal' size='lg'>Default</Button>
                </div>
            </div>
            <div id='containerColorsBT'>
                <div className='buttonContainer' id='defaultBT'>
                    <span className='labelButton'>{'<Button color="default" />'}</span>
                    <Button color='default' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='primaryBT'>
                    <span className='labelButton'>{'<Button color="primary" />'}</span>
                    <Button color='primary' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='secondaryBT'>
                    <span className='labelButton'>{'<Button color="secondary" />'}</span>
                    <Button color='secondary' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='dangerBT'>
                    <span className='labelButton'>{'<Button color="danger" />'}</span>
                    <Button color='danger' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='defaultBTHover'>
                    <span className='labelButton labelButtonHover'>&:hover, &:focus</span>
                    <Button color='defaultExampleHover' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='primaryBTHover'>
                    <span className='labelButton labelButtonHover'>&nbsp;</span>
                    <Button color='primaryExampleHover' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='secondaryBTHover'>
                    <span className='labelButton labelButtonHover'>&nbsp;</span>
                    <Button color='secondaryExampleHover' variant='normal'>Default</Button>
                </div>
                <div className='buttonContainer' id='dangerBTHover'>
                    <span className='labelButton labelButtonHover'>&nbsp;</span>
                    <Button color='dangerExampleHover' variant='normal'>Default</Button>
                </div>
            </div>
        </div>

    </div>
}
export default ListButtons