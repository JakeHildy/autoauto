import { setFileOutputPath, setGridOutputPath, setFilePattern } from "../../helpers/finders";
import { getCurrentDate, buildFileName } from "../../helpers/helpers";

const stdNegPrompt = 'watermark, nude, naked, nsfw, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck'
const followUp = "airbrush, cinematic, sunlight, award winning photography"
const imgCreationTime = 8;
const batchSize = 6;


const date = getCurrentDate();
const fileOutputPath = `C:\\Local Folder\\AI Images\\images\\`;
const gridOutputPath = `C:\\Local Folder\\AI Images\\grids\\`;
const filePattern = `[datetime]-[prompt_no_styles]`

// save in folder ai-images/23-06-07/slug-ified-description/files.png
describe('Example Test', () => {
    const words = ["peonies", 'tulips', 'lilies', 'pond', 'rain chain', 'fresh grass', 'red lawn chairs'];


    it('should generate some fruits!', () => {
      cy.visit('http://localhost:7860/');
      cy.url().should('eq', 'http://localhost:7860/');

      // Move to Settings Tab
      setFileOutputPath(fileOutputPath)
      setGridOutputPath(gridOutputPath)
      setFilePattern(filePattern)

      cy.get('#txt2img_neg_prompt textarea').type(stdNegPrompt);
      cy.get('#txt2img_batch_count input[data-testid="number-input"]').clear();
      cy.get('#txt2img_batch_count input[data-testid="number-input"]').type(`${batchSize}`)

      words.forEach((word) => {
        cy.get('#txt2img_prompt textarea').type(`${word}, ${followUp}`);
        cy.get('#txt2img_generate').click({force: true});
        cy.wait(batchSize * imgCreationTime * 1000)
        // cy.get('#txt2img_generate', { timeout: 60000 }).should('exist');
        cy.get('#txt2img_prompt textarea').clear();  
      })
        
    
    });
});
  

  
//  save in folder ai-images/23-06-07/slug-ified-description/files.png
// move to settings tab
